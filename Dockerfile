FROM lambci/lambda:build-python3.6
WORKDIR /var/task
RUN python -m venv /.venv
COPY requirements requirements
RUN source /.venv/bin/activate && pip install -r requirements/requirements.txt
COPY . /var/task
CMD source /.venv/bin/activate && python3 aria/app.py
