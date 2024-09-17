# Stockify

Stockify is an advanced virtual trading platform that provides a realistic and interactive environment for simulated stock trading. Designed to help users practice and refine their trading skills without the risk of real financial loss, Stockify offers a comprehensive suite of features and tools for both novice and experienced traders.

## 🚛 Features

- **Virtual Trading**: Seamlessly create and manage virtual portfolios, execute trades, and track performance with real-time updates.
  
- **Real-Time Market Data**: Stay informed with up-to-the-minute market data, including live stock prices and trends.

- **Risk Management Tools**: Utilize advanced risk management features such as stop-loss orders to evaluate and mitigate potential risks in your trading strategies.

- **Educational Resources**: Access a variety of educational materials including tutorials, articles, and insights to enhance your understanding of stock trading and investment strategies.

- **Market Status**: View the comprehensive status of various market segments in one place for better decision-making.

## ⚙ Installation

To set up Stockify locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/web.git
   ```

2. **Install Dependencies**:
   Navigate to the project directories and install the necessary dependencies:
   ```bash
   cd stockify/frontend
   npm install

   cd ../backend
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the `backend` folder.
   - Populate it with the required environment variables:

   **Frontend `.env`**:
   ```env
   REACT_APP_BASE_URL=http://localhost:5000/api
   ```

   **Backend `.env`**:
   ```env
   PORT=5000
   MONGO_URI=<MONGO_URI>
   TOKEN_KEY=<JWT_TOKEN_KEY>
   FYERS_APP_ID=<FYERS_APP_ID>
   FYERS_ACCESS_TOKEN=<FYERS_ACCESS_TOKEN>
   ```

4. **Start the Application**:
   - For the frontend:
     ```bash
     cd frontend
     npm start
     ```
   - For the backend:
     ```bash
     cd ../backend
     npm run dev
     ```

5. **Access Stockify**:
   Open your web browser and navigate to `http://localhost:3000` to start using Stockify.

## 🏗 Technologies Used

- **Front-end**: HTML, CSS, JavaScript, React
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB
- **External APIs**: Fyres APIs, NSE APIs

## 📷 Screenshots

Here are some screenshots of Stockify in action:

- **Signup**: ![Signup](https://github.com/Maran1947/Stockify/assets/69248165/8188c2ec-2543-41a8-be55-23c62983e39e)
- **Signin**: ![Signin](https://github.com/Maran1947/Stockify/assets/69248165/44668b73-bd35-4b0d-b660-5a222df7dd43)
- **Account**: ![Account](https://github.com/Maran1947/Stockify/assets/69248165/0285b2f4-baf9-4ee0-a685-35d392f6f091)
- **Dashboard Search Script**: ![dashboard_search_scrip](https://github.com/Maran1947/Stockify/assets/69248165/e6dde60f-971a-4cdc-9f3f-33e7beb262f1)
- **Dashboard Order Screen**: ![dashboard_order_screen](https://github.com/Maran1947/Stockify/assets/69248165/c59aa018-77a1-427e-95fe-bdcc7d6c9af5)
- **Dashboard Order Placing**: ![dashboard_order_placing](https://github.com/Maran1947/Stockify/assets/69248165/05f097a1-29de-4ae7-9d60-d946def8d335)
- **Risk Management Tool**: ![risk_management_tool](https://github.com/Maran1947/Stockify/assets/69248165/504fcf3e-250a-4665-8abc-60e8e2ed223b)

## 🤝 Contribution

We welcome contributions from the community! If you have suggestions, improvements, or bug fixes, feel free to submit a pull request or open an issue.

- **How to Contribute**:
  - Fork the repository
  - Create a new branch
  - Make your changes
  - Submit a pull request with a clear description of your changes
    
Feel free to paste this text directly into your README file!
