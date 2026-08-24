# huduma-plus-kenya
A Kenyan digital platform connecting people with everyday solutions, services, opportunities, guidance and useful information.
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f4f7f5;
    color: #17231b;
}

header {
    background: #006b3c;
    color: white;
    padding: 25px 20px;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 30px;
}

header p {
    margin: 8px 0 0;
}

.container {
    max-width: 900px;
    margin: auto;
    padding: 25px 20px;
}

.search-box {
    background: white;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.search-box input {
    width: 100%;
    padding: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
}

.categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
}

.category {
    background: white;
    padding: 18px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.category h3 {
    margin: 8px 0;
}

footer {
    text-align: center;
    padding: 25px;
    margin-top: 30px;
    background: #17231b;
    color: white;
}
