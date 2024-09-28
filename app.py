# site_v3/app.py

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('base.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/details')
def about():
    return render_template('details.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/certification')
def certification():
    return render_template('certification.html')

@app.route('/content/<section>')
def get_content(section):
    content = {
        'home': render_template('home.html'),
        'details': render_template('details.html'),
        'education': render_template('education.html'),
        'certification': render_template('certification.html'),
    }
    return content.get(section, '<h2>Content not found</h2><p>The content you are looking for is not available.</p>')

if __name__ == '__main__':
    app.run(debug=True)
