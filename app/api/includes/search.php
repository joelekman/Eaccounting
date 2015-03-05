<?php
    mb_internal_encoding("UTF-8");
    include_once 'db_connect.php';
    $jsonText = $_COOKIE["SearchParams"];
    $decodedText = html_entity_decode($jsonText);
    $searchParams = json_decode($decodedText, true);
?>
<script type="text/javascript">
    function getResult() {
        document.getElementById('sorting-field').className = "sorting";
        var params = new FormData(document.getElementById("searchForm"));
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("result").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("POST", "includes/result.php", true);
        xmlhttp.send(params);
    }


    function sort(orderBy) {
        document.getElementById('orderBy').value = orderBy;
        getResult();
    }
</script>
<div class="container search-field">
    <form id="searchForm">
        <div class="form-group">
            <label for="minNumberOfRooms">Antal rum</label>
            <div class="form-inline">
                <input type="number" value="<?= $searchParams[minNumberOfRooms]?>" min="0" class="form-control number" name="minNumberOfRooms" placeholder="min">
                <input type="number" value="<?= $searchParams[maxNumberOfRooms]?>" min="0" class="form-control number" name="maxNumberOfRooms" placeholder="max">
            </div>
        </div>
        <div class="form-group">
            <label for="minArea">Area</label>
            <div class="form-inline">
                <input type="number" value="<?= $searchParams[minArea]?>" min="0" class="form-control number" name="minArea" placeholder="min">
                <input type="number" value="<?= $searchParams[maxArea]?>" min="0" class="form-control number" name="maxArea" placeholder="max">
            </div>
        </div>
        <div class="form-group">
            <label for="minPris">Pris</label>
            <div class="form-inline">
                <input type="number" value="<?= $searchParams[minPris]?>" min="0" class="form-control number" id="minPris" name="minPris" placeholder="min">
                <input type="number" value="<?= $searchParams[maxPris]?>" min="0" class="form-control number" name="maxPris" placeholder="max">
            </div>
        </div>
        <div class="form-group">
            <label for="minAvgift">Avgift</label>
            <div class="form-inline">
                <input type="number" value="<?= $searchParams[minAvgift]?>" min="0" class="form-control number" name="minAvgift" placeholder="min">
                <input type="number" value="<?= $searchParams[maxAvgift]?>" min="0" class="form-control number" name="maxAvgift" placeholder="max">
            </div>
        </div>
        <div class="form-group">
            <label>Län</label>
            <select class="form-control" name="county">
                /* Value % is wildcard in SQL to get objects from all countys. */
                <option value="%">Alla</option>
                <?php
                    $stmt = $mysqli->prepare("SELECT DISTINCT lan FROM bostader;");
                    $stmt->execute();
                    $stmt->store_result();
                    $stmt->bind_result($county);
                    while (($stmt->fetch()) != null) {
                        if ($searchParams['county'] === $county){
                            echo "<option selected='selected' value=".$county.">".$county."  </option>";
                        } else {
                            echo "<option value=" . $county . ">" . $county . " </option>";
                        }
                    }
                ?>
            </select>
        </div>
        <div class="form-group">
            <label>Objektstyp</label>
            <select class="form-control" name="objectType">
                /* Value % is wildcard in SQL to get objects of all types. */
                <option value="%">Alla</option>
                <?php
                    $stmt = $mysqli->prepare("SELECT DISTINCT objekttyp FROM bostader;");
                    $stmt->execute();
                    $stmt->store_result();
                    $stmt->bind_result($objectType);
                    while (($stmt->fetch()) != null) {
                        if ($searchParams['objectType'] === $objectType) {
                            echo "<option selected='selected' value=".$objectType.">".$objectType."</option>";
                        } else {
                            echo "<option value=".$objectType.">".$objectType."</option>";
                        }
                    }
                ?>
            </select>
        </div>
            <input type="hidden" id="orderBy" name="orderBy" value="<?php if ($searchParams['orderBy'] !== null) {
                echo $searchParams['orderBy'];
            } else {
                echo "pris";
            }
            ?>">
    </form>
    <button onclick="getResult()" class="btn btn-default" value="search">Sök</button>
</div>
