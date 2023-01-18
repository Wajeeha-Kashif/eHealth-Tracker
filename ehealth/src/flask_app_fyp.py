

import io
import json
import torch

from torchvision import transforms
from flask import Flask, jsonify, request

app = Flask(__name__)


model = torch.load("checkpoint.pt", map_location="cpu") # Model download link is shown above too
model.eval() # Evaluation mode, IMPORTANT


disease_classes = ["No Disease", "Diabetic Retinopathy", "Age Related Macular Disorder", "No Disease"]

def transform_image(image_bytes): 
  # min max normalization
  img_arr = cv2.resize(img_arr, (450, 300))
  img_arr = (img_arr - np.min(img_arr))/(np.max(img_arr) - np.min(img_arr))
  return img_arr


def get_prediction(image):
    tensor = transform_image(image)
    outputs = model(tensor)
    print(outputs)
    _, y_hat = outputs.max(1)
    predicted_idx = y_hat.item()
    print(predicted_idx)
    return disease_classes[predicted_idx]


@app.route('/predict', methods=['POST'])


def predict():
    if request.method == "POST":
        image = request.files['file']
        img_bytes = image.read()
        class_name = get_prediction(img_bytes)
        print(class_name)
        return jsonify({
            "class_name":class_name
        })


if __name__ == '__main__':
    app.run(debug=True)