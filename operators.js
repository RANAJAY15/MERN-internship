<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operators in HTML & JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table {
            width: 80%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <h1>Operators in HTML & JavaScript</h1>

    <h2>1. Arithmetic Operators</h2>
    <p>Arithmetic operators are used to perform mathematical calculations:</p>
    <table>
        <tr>
            <th>Operator</th>
            <th>Operation</th>
            <th>Example</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>+</td>
            <td>Addition</td>
            <td>5 + 3</td>
            <td><span id="add"></span></td>
        </tr>
        <tr>
            <td>-</td>
            <td>Subtraction</td>
            <td>5 - 3</td>
            <td><span id="sub"></span></td>
        </tr>
        <tr>
            <td>*</td>
            <td>Multiplication</td>
            <td>5 * 3</td>
            <td><span id="mul"></span></td>
        </tr>
        <tr>
            <td>/</td>
            <td>Division</td>
            <td>5 / 3</td>
            <td><span id="div"></span></td>
        </tr>
        <tr>
            <td>%</td>
            <td>Modulus</td>
            <td>5 % 3</td>
            <td><span id="mod"></span></td>
        </tr>
    </table>

    <h2>2. Relational Operators</h2>
    <p>Relational operators compare values and return true or false:</p>
    <table>
        <tr>
            <th>Operator</th>
            <th>Operation</th>
            <th>Example</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>==</td>
            <td>Equal to</td>
            <td>5 == 3</td>
            <td><span id="equal"></span></td>
        </tr>
        <tr>
            <td>!=</td>
            <td>Not equal to</td>
            <td>5 != 3</td>
            <td><span id="notEqual"></span></td>
        </tr>
        <tr>
            <td>&gt;</td>
            <td>Greater than</td>
            <td>5 > 3</td>
            <td><span id="greater"></span></td>
        </tr>
        <tr>
            <td>&lt;</td>
            <td>Less than</td>
            <td>5 < 3</td>
            <td><span id="less"></span></td>
        </tr>
    </table>

    <h2>3. Logical Operators</h2>
    <p>Logical operators are used to combine conditions:</p>
    <table>
        <tr>
            <th>Operator</th>
            <th>Operation</th>
            <th>Example</th>
            <th>Result</th>
        </tr>
        <tr>
            <td>&&</td>
            <td>Logical AND</td>
            <td>(5 > 3) && (3 > 2)</td>
            <td><span id="and"></span></td>
        </tr>
        <tr>
            <td>||</td>
            <td>Logical OR</td>
            <td>(5 > 3) || (3 < 2)</td>
            <td><span id="or"></span></td>
        </tr>
        <tr>
            <td>!</td>
            <td>Logical NOT</td>
            <td>!(5 > 3)</td>
            <td><span id="not"></span></td>
        </tr>
    </table>

    <script>
        // Arithmetic
        document.getElementById('add').textContent = 5 + 3;
        document.getElementById('sub').textContent = 5 - 3;
        document.getElementById('mul').textContent = 5 * 3;
        document.getElementById('div').textContent = (5 / 3).toFixed(2);
        document.getElementById('mod').textContent = 5 % 3;

        // Relational
        document.getElementById('equal').textContent = 5 == 3;
        document.getElementById('notEqual').textContent = 5 != 3;
        document.getElementById('greater').textContent = 5 > 3;
        document.getElementById('less').textContent = 5 < 3;

        // Logical
        document.getElementById('and').textContent = (5 > 3) && (3 > 2);
        document.getElementById('or').textContent = (5 > 3) || (3 < 2);
        document.getElementById('not').textContent = !(5 > 3);
    </script>
</body>
</html>
