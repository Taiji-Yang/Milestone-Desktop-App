from flask import Flask, request, render_template, redirect
import os
import pandas as pd

app = Flask(__name__)
dfs = pd.read_excel('milestones.xlsx', sheet_name=None, engine='openpyxl')
print(type(dfs), type(dfs['Sheet1']), list(dfs['Sheet1']['Milestone']), list(dfs['Sheet1']['Completion date']) )


@app.route('/getData', methods = ['GET'])
def api():
    dfs = pd.read_excel('milestones.xlsx', sheet_name=None, engine='openpyxl')
    return {
        "Milestones":list(dfs['Sheet1']['Milestone']),
        "Dates":list(dfs['Sheet1']['Completion date'])
    }

@app.route('/PostData', methods = ['POST'])
def databasepost():
    json_data = request.json
    print(json_data)
    data = json_data["DataOnTable"]
    df1 = pd.DataFrame(data, columns=['milestone', 'date'])
    df1.to_excel("my_selected_milestones.xlsx") 
    return {'status':'ok'}

if __name__ == "__main__":
    #db.create_all()
    app.run(debug=True)