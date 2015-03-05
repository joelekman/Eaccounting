/* ------------------ PROCEDURE TO ADD A NEW USER AND TEST IT --------------------------------- */

DROP PROCEDURE UserAdd;

DELIMITER //;
CREATE PROCEDURE UserAdd (
	IN _UserName VARCHAR(32), 
    IN _CompanyName VARCHAR(32), 
    IN _FirstName VARCHAR(32), 
    IN _LastName VARCHAR (32),
    IN _Email VARCHAR(50),
	IN _HashedPassword CHAR(128),
	IN _Salt CHAR(128)
    )
BEGIN
	INSERT INTO User VALUES 
		(
			NULL,
            _UserName,
            _CompanyName,
            _FirstName,
            _LastName,
            _Email,
            _HashedPassword,
            _Salt
        );
END//;
DELIMITER ;

CALL UserAdd('joelekman', 'Eaccounting', 'Joel', 'Ekman', 'nothing@joelekman.se', '1234','asbd');

SELECT * FROM User;

/* --------------------------------------------------------------------------------------------- */

/* ---------------------------- PROCEDURE TO SAVE SALERY HISTORY ------------------------------- */

DROP PROCEDURE SaleryHistoryAdd;

DELIMITER //;
CREATE PROCEDURE SaleryHistoryAdd (
	IN _UserId MEDIUMINT,
	IN _OwnWithdrawl INT,
    IN _SaleryWithTax INT,
    IN _Tax INT,
    IN _EmploymentFee INT,
    IN _SaleryWithoutTax INT,
    IN _TotalTax INT,
    IN _Verification VARCHAR(32),
    IN _WithdrawYear INT,
    IN _WithdrawDate DATE
    )
BEGIN
	INSERT INTO SaleryHistory VALUES 
		(
			NULL,
			_UserId,
			_OwnWithdrawl,
			_SaleryWithTax,
			_Tax,
			_EmploymentFee,
			_SaleryWithoutTax,
			_TotalTax,
			_Verification,
			_WithdrawYear,
			_WithdrawDate,
			NULL
        );
END//;
DELIMITER ;

CALL SaleryHistoryAdd( 1, 25000, 20000, 7000, 5000, 13000, 12000, 'VR_num: 2015-12', 2015, '2015-03-05'); 


SELECT * FROM SaleryHistory;
/* --------------------------------------------------------------------------------------------- */