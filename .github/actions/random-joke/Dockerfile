#파이썬에 맞는 코드
From python:3

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "/src/main.py"]