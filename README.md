
# Next.js and Django Dashboard Application

This project is a simple dashboard application that uses **Next.js** on the frontend and a **Django API** backend to display data in various chart formats (Candlestick, Line, Bar, and Pie charts).

## Table of Contents
1. [Setup and Run Instructions](#setup-and-run-instructions)
2. [Libraries and Tools Used](#libraries-and-tools-used)
3. [Approach and Thought Process](#approach-and-thought-process)

---

## Setup and Run Instructions

### 1. Frontend (Next.js)

#### a. Install Dependencies:
To set up the frontend, navigate to the **frontend** directory and install the dependencies using npm:

```bash
cd frontend
npm install
```

#### b. Run the Frontend:
Start the Next.js development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:3000` by default.

### 2. Backend (Django)

#### a. Set Up a Virtual Environment:
Create and activate a virtual environment for the Django backend:

```bash
# For macOS/Linux
python3 -m venv venv
source venv/bin/activate

# For Windows
python -m venv venv
venv\Scripts\activate
```

#### b. Install Dependencies:
In the **backend** directory, install the required Python packages from the `requirements.txt` file:

```bash
cd backend
pip install -r requirements.txt
```

#### c. Run the Django Server:
Once the dependencies are installed, run the Django development server:

```bash
python manage.py runserver
```

The backend API will now be available at `http://127.0.0.1:8000/`.

### 3. Bringing It All Together

With both the **Next.js frontend** and **Django backend** running, open your browser and navigate to:

```
http://localhost:3000
```

This will load the dashboard and display the charts using data fetched from the Django backend.

---

## Libraries and Tools Used

### Frontend (Next.js)

- **Next.js**: React framework for building the frontend.
- **Chart.js**: Used to render Line, Bar, and Pie charts.
- **Lightweight-Charts**: Used to render the Candlestick chart.
- **Axios**: Used for making API requests.
- **CSS Grid & Flexbox**: Used to create a responsive layout.

### Backend (Django)

- **Django**: Python web framework to serve the API.
- **Django REST Framework (DRF)**: Used to create and manage API endpoints.
- **Python**: Backend language for this project.

---

## Approach and Thought Process

### 1. Modular Approach
The application is broken down into:
- **Frontend (Next.js)** for rendering the user interface.
- **Backend (Django)** for serving the API data to the frontend.

### 2. API Integration
Each chart's data is retrieved from corresponding Django API endpoints:
- `/api/candlestick-data/` - Provides data for the Candlestick chart.
- `/api/line-chart-data/` - Provides data for the Line chart.
- `/api/bar-chart-data/` - Provides data for the Bar chart.
- `/api/pie-chart-data/` - Provides data for the Pie chart.

The data is currently hardcoded for simplicity but can be replaced with dynamic sources.

### 3. Error Handling
If the frontend fails to retrieve data from the API, it displays a user-friendly error message instead of breaking the application. This ensures a smooth user experience even in the event of an API failure.

### 4. Chart Rendering
- **Candlestick Chart**: Rendered using `Lightweight-Charts`, optimized for financial/time-series data.
- **Line, Bar, and Pie Charts**: Rendered using `Chart.js`, a popular library for versatile chart types.

### 5. Styling and Layout
The layout uses **CSS Grid** and **Flexbox** to ensure a clean and responsive design. The charts are evenly spaced and adapt to different screen sizes, making the dashboard mobile-friendly.

---
