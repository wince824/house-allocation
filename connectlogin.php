<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieving form data using $_POST superglobal
    $name = $_POST['name']; // Adjusted variable name
    $email = $_POST['email']; // Adjusted variable name
   
    // Creating a MySQL database connection
    $con = new mysqli('localhost', 'root', '', 'housing');
    
    // Checking if the connection was successful
    if ($con) {
        echo "connection successful";
        
        // Escaping user input to prevent SQL injection
        $name = mysqli_real_escape_string($con, $name);
        $email = mysqli_real_escape_string($con, $email);
       
        // Constructing the SQL query to insert data into the 'data' table
        $sql = "INSERT INTO `loginfo` (`name`, `email`,)
                VALUES ('$name', '$email', )";
        
        // Executing the SQL query
        $result = mysqli_query($con, $sql);
        
        // Checking if the data insertion was successful
        if ($result) {
            echo "data inserted successfully";
        } else {
            die(mysqli_error($con)); // Printing the MySQL error message and terminating the script
        }
    } else {
        die(mysqli_error($con)); // Printing the MySQL error message and terminating the script
    }
}
?>

