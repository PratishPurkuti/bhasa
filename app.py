from flask import Flask, render_template

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

if __name__ == '__main__':
    app.run(debug=True,port=5000) 