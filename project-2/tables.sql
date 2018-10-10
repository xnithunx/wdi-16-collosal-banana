
DROP TABLE IF EXISTS donors;
DROP TABLE IF EXISTS orgz;
DROP TABLE IF EXISTS donors_orgz;
DROP TABLE IF EXISTS donation_list;


CREATE TABLE IF NOT EXISTS donors (
		id SERIAL PRIMARY KEY,
		donor_name TEXT,
		donor_email TEXT,
		donor_location TEXT,
		donor_password VARCHAR
);


CREATE TABLE IF NOT EXISTS orgz (
		id SERIAL PRIMARY KEY,
		orgz_name TEXT,
		orgz_location TEXT,
		orgz_about TEXT,
		orgz_impact_score TEXT
);


CREATE TABLE IF NOT EXISTS donors_orgz (
		id SERIAL PRIMARY KEY,
		donors_name TEXT,
		orgz_name TEXT
);


CREATE TABLE IF NOT EXISTS donation_list (
		id SERIAL PRIMARY KEY,
		donors_name TEXT,
		orgz_name TEXT,
		donated INTEGER
);












