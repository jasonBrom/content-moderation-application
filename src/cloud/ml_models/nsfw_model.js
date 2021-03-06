// you can use any other http client
import axios from "axios";

import * as tf from "@tensorflow/tfjs-node";
import * as nsfw from "nsfwjs";
import config from "../config";

tf.enableProdMode(); // enable on production

let module_vars = { model: null };

const init = async () => {
  const model_url = config.env.nsfw_model_url;
  const shape_size = config.env.nsfw_model_shape_size;

  // Load the model in the memory only once!
  if (!module_vars.model) {
    try {
      module_vars.model = await nsfw.load(model_url, { size: parseInt(shape_size) });
      console.info("The NSFW Model was loaded successfuly!");
    } catch (err) {
      console.error(err);
    }
  }
};

const classify = async (url) => {
  let pic;
  let result = {};

  const { model } = module_vars;

  try {
    pic = await axios.get(url, {
      responseType: "arraybuffer",
    });
  } catch (err) {
    console.error("Download Image Error:", err);
    result.error = err;
    return result;
  }

  try {
    // Image must be in tf.tensor3d format
    // you can convert image to tf.tensor3d with tf.node.decodeImage(Uint8Array,channels)
    const image = await tf.node.decodeImage(pic.data, 3);
    const predictions = await model.classify(image);

    image.dispose(); // Tensor memory must be managed explicitly (it is not sufficient to let a tf.Tensor go out of scope for its memory to be released).

    result = predictions;
  } catch (err) {
    console.error("Prediction Error: ", err);
    result.error = "Model is not loaded yet!";
    return result;
  }

  return result;
};

const isSafe = async (url) => {
  let result = {
    predictions: null,
    isSafe: true,
    isToxic: false
  };

  const conf = await config.parse.current();
  const moderationScores = conf.get("moderationScores");

  try {
    const predictions = await classify(url);
    result.predictions = predictions;

    for (let [dangerClassName, dangerProbability] of Object.entries(moderationScores)) {
      predictions.forEach(prediction => {

        // Probably toxic images should be deleted or marked for deletion.
        if (prediction.className === dangerClassName && prediction.probability > dangerProbability.max) {
          result.isSafe = false;
          result.isToxic = true;
          return true;
        }

        // We want to mark for moderation only these images that the Model is not
        // super confident that they are SAFE or NOT SAFE
        if (prediction.className === dangerClassName &&
          (prediction.probability >= dangerProbability.min && prediction.probability <= dangerProbability.max)
        ) {
          result.isSafe = false;
          return true;
        }
      });
    }

  } catch (err) {
    console.error(err);
  }

  return result;
};

// Load the model on the first require
init();

export default {
  classify,
  isSafe
}
