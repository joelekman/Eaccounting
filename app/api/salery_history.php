hello
<?php
    mb_internal_encoding("UTF-8");
    include 'includes/db_connect.php';
  //	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo 'connected';
        if ($stmt = $mysqli->prepare("CALL SaleryHistoryAdd(?,?,?,?,?,?,?,?,?,?);")) {

//            ($_POST["minNumberOfRooms"] === "" ? $minNumberOfRooms = null : $minNumberOfRooms = $_POST["minNumberOfRooms"]);
//            ($_POST["maxNumberOfRooms"] === "" ? $maxNumberOfRooms = null : $maxNumberOfRooms = $_POST["maxNumberOfRooms"]);
//            ($_POST["minArea"] === "" ? $minArea = null : $minArea = $_POST["minArea"]);
//            ($_POST["maxArea"] === "" ? $maxArea = null : $maxArea = $_POST["maxArea"]);
//            ($_POST["minPris"] === "" ? $minPris = null : $minPris = $_POST["minPris"]);
//            ($_POST["maxPris"] === "" ? $maxPris = null : $maxPris = $_POST["maxPris"]);
//            ($_POST["minAvgift"] === "" ? $minAvgift = null : $minAvgift = $_POST["minAvgift"]);
//            ($_POST["maxAvgift"] === "" ? $maxAvgift = null : $maxAvgift = $_POST["maxAvgift"]);

            $stmt->bind_param(1, 45000, 20000, 7000, 5000, 13000, 12000, 'VR_num: 2015-12', 2015, '2015-03-05');
        } else {
            printf("Errormessage: %s\n", $mysqli->error);
        }

        $stmt->execute();
//        $stmt->store_result();
//        $stmt->bind_result($county, $objectType, $address, $area, $room, $price, $fee);
//        echo "<div class='listings'>";
//        $counter = 0;
//        while (($stmt->fetch()) != null) {
//            $counter ++;
//            echo getCssClasses($county, $objectType, $address, $area, $room, $price, $fee);
//        }
//        if ($counter === 0) {
//            echo "Inga bostäder som matchar din sökning!";
//        }
//        echo '</div>';
 // 	}
?>