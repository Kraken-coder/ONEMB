
# StudyBot API

The **StudyBot API** is a FastAPI-based application that facilitates document uploads, generates questions, provides summaries, and answers queries from uploaded documents. It integrates with advanced LLMs like Llama for natural language processing tasks.

---

## Features

1. **Document Upload**: Upload multiple documents for analysis.
2. **Question Generation**: Generate multiple-choice questions (MCQs) based on the uploaded documents.
3. **Summarization**: Summarize key concepts from the uploaded documents.
4. **Query Answering**: Answer user queries using the content of the uploaded documents.
5. **Question Processing**: Validate user responses to generated questions and provide explanations.

---

## Technologies Used

- **Backend**: FastAPI
- **NLP Models**: Llama (via `llama_index` and `Ollama`)
- **Vectorization**: TF-IDF and cosine similarity (using `scikit-learn`)
- **Frontend**: Connected React application (located in the `dsu` folder)
- **Middleware**: CORS for secure frontend-backend communication

---

## Installation and Setup

### Prerequisites

1. Python 3.8 or later
2. `pip` package manager
3. Node.js (for the React frontend)
4. Docker (if deploying using containers)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Start the FastAPI application:
    ```bash
    uvicorn main:app --reload
    ```

4. Open your browser and navigate to `http://127.0.0.1:8000/docs` to explore the API documentation.

### Frontend Setup

1. Navigate to the `dsu` folder:
    ```bash
    cd dsu
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

4. Access the frontend at `http://localhost:3000`.

---

## API Endpoints

### **Document Upload**
- **URL**: `/upload-documents/`
- **Method**: POST
- **Description**: Upload multiple documents for processing.
- **Input**: List of files
- **Response**: `{"message": "Documents uploaded and processed successfully"}`

### **Generate Questions**
- **URL**: `/generate-questions/`
- **Method**: POST
- **Description**: Generate multiple-choice questions from the uploaded documents.

### **Summarize**
- **URL**: `/summarize/`
- **Method**: POST
- **Description**: Summarize key concepts from the uploaded documents.
- **Input**: `{"text": "Your text here"}`

### **Query Answering**
- **URL**: `/query/{text}`
- **Method**: GET
- **Description**: Get answers to queries from the uploaded documents.

### **Process Questions**
- **URL**: `/process`
- **Method**: POST
- **Description**: Process user answers to questions and provide explanations for incorrect answers.

---

## Dependencies

- **Python Libraries**:
  - FastAPI
  - Pydantic
  - Nest AsyncIO
  - scikit-learn
  - llama_index
  - Ollama
  - pandas
- **Frontend Dependencies**:
  - ReactJS

---
