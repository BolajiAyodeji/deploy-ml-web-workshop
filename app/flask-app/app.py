from flask import Flask, request, redirect, url_for, render_template
import pickle

# Create an instance of the Flask class
# with the name of the application’s modules
app = Flask(__name__, template_folder='templates')

# Create the / API route and render the root HTML page
@app.route('/', methods=['GET'])
def main():
    return(render_template('main.html'))

# Create the /predict API route
@app.route('/predict', methods=['GET', 'POST'])
def predict():
    # Use pickle to load in vectorizer.
    with open(f'../../model/two/vectorizer.pkl', 'rb') as f:
        vectorizer = pickle.load(f)

    # Use pickle to load in the pre-trained model.
    with open(f'../../model/two/model.pkl', 'rb') as f:
        model = pickle.load(f)

    if request.method == 'POST':
        name = request.form['name']
        country = request.form['country']
        message = request.form['message']

        mbpti_types = {
            0: "ENFJ (Extroversion, Intuition, Feeling, Judging)",
            1: "ENFP (Extroversion, Intuition, Feeling, Perceiving)",
            2: "ENTJ (Extroversion, Intuition, Thinking, Judging)",
            3: "ENTP (Extroversion, Intuition, Thinking, Perceiving)",
            4: "ESFJ (Extroversion, Sensing, Feeling, Judging)",
            5: "ESFP (Extroversion, Sensing, Feeling, Perceiving)",
            6: "ESTJ (Extroversion, Sensing, Thinking, Judging)",
            7: "ESTP (Extroversion, Sensing, Thinking, Perceiving)",
            8: "INFJ (Introversion, Intuition, Feeling, Judging)",
            9: "INFP (Introversion, Intuition, Feeling, Perceiving)",
            10: "INTJ (Introversion, Intuition, Thinking, Judging)",
            11: "INTP (Introversion, Intuition, Thinking, Perceiving)",
            12: "ISFJ (Introversion, Sensing, Feeling, Judging)",
            13: "ISFP (Introversion, Sensing, Feeling, Perceiving)",
            14: "ISTJ (Introversion, Sensing, Thinking, Judging)",
            15: "ISTP (Introversion, Sensing, Thinking, Perceiving)"
        }

        prediction = model.predict(vectorizer.transform([message]))
        result = mbpti_types[prediction[0]]

    else:
        return(redirect(url_for('main')))

    return(render_template(
        'result.html', 
        name=name, 
        country=country, 
        result=result
        ))

@app.errorhandler(404)
def notFound(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run()
