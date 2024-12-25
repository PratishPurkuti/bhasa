from flask import Flask, render_template, request

app = Flask(__name__)
app.secret_key = 'your_secret_key'


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/basic1')
def basic1():
    return render_template('basic1.html')

@app.route('/test1', methods=['POST', 'GET'])
def test1():
    if request.method == "POST":
        # Define correct answers for comparison
        correct_answers = {
            'ka': 'ka',
            'kaa': 'kaa',
            'ki': 'ki',
            'ku': 'ku',
            'kai': 'kai',
            'ko': 'ko'
        }

        points = 0  # Initialize points

        # Iterate through correct answers and calculate points
        user_answers = {}
        for key, correct_value in correct_answers.items():
            user_input = request.form.get(key, '').lower()
            user_answers[key] = user_input  # Store user input for later use
            if user_input == correct_value:
                points += 1

        # Pass user inputs and points to the template
        return render_template('results.html',points=points)

    # Render the form initially without processing
    return render_template('test1.html', points=0, user_answers={})


if __name__ == '__main__':
    app.run(debug=True,port=5000)   