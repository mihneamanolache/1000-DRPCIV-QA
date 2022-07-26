from flask import Flask, jsonify, json, request
import os
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

@app.route('/api/v1/intrebari/all', methods=['GET'])
def intrebari():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "intrebari.json")
    data = json.load(open(json_url))
    return jsonify(data)

@app.route('/api/v1/intrebari/', methods=['GET'])
def api_nr():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "intrebari.json")
    data = json.load(open(json_url))
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify a number."

    results = []

    for intrebare in data:
        if intrebare['nr'] == id:
            results.append(intrebare)
    return jsonify(results)

# http://127.0.0.1:5000/api/v1/intrebari/categoria?id=B
@app.route('/api/v1/intrebari/categoria', methods=['GET'])
def api_categoria():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "intrebari.json")
    data = json.load(open(json_url))
    if 'id' in request.args:
        id = request.args['id']
    else:
        return "Error: No id field provided. Please specify a number."

    results = []

    for intrebare in data:
        if id in intrebare['categorie']:
            results.append(intrebare)
    return jsonify(results)


@app.route('/api/v1/intrebari/cauta/', methods=['GET'])
def api_search_question():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "intrebari.json")
    data = json.load(open(json_url))
    if 's' in request.args:
        id = str(request.args['s'])
    else:
        return "Eroare: Introduceti cel putin un cuvant."
    results = []
    for intrebare in data:
        if id in intrebare['intrebare']:
            results.append(intrebare)
    return jsonify(results)

@app.route('/api/v1/intrebari/less', methods=['GET'])
def api_less():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "intrebari.json")
    data = json.load(open(json_url))
    if 'id' in request.args:
        id = int(request.args['id'])
    else:
        return "Error: No id field provided. Please specify a number."

    results = []
    minus_10 = id - 3
    for intrebare in data:
        if  intrebare['nr'] > minus_10 and intrebare['nr'] <= id:
            results.append(intrebare)
    return jsonify(results)