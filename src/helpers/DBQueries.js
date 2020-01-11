const CREATE_EMPLOYEE_TABLE = 
`create table if not exists employees
(
    id uuid primary key,
    empname varchar(50) not null,
    nationalid varchar(16) not null unique,
    email varchar(50) not null,
    phonenumber varchar(13) not null unique,
    dob date,
    createdOn date,
    modifiedOn date,
    status varchar(50) check(status = 'inactive' or status = 'active'),
    postion varchar(50) not null
)`
const CREATE_MANAGER_TABLE =
`create table if not exists manager
(
    id uuid primary key,
    mangname varchar(50) not null,
    nationalid varchar(16) not null unique,
    email varchar(50) not null,
    phonenumber varchar(13) not null unique,
    dob date,
    createdOn date,
    modifiedOn date,
    status varchar(50) check(status = 'inactive' or status = 'active'),
    postion varchar(50) not null check(postion='manager'),
    password varchar(225) not null 
)`
const CREATE_EMPLOYEE=
`insert into employees(id, empname,nationalid,email,phonenumber,dob,createdOn,status,postion)
values($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`;
const CREATE_MANAGER=
`insert into manager (id, mangname,nationalid,email,phonenumber,dob,createdOn,status,postion,password)
values($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *`;
/**
 * @deprecated
 */
const UPDATE_EMPLOYEE_INFO = 
`update employees set empname = $1, nationalid = $2, email = $3, phonenumber = $4, dob = $5, modifiedOn = $6,postion = $7
where id = $8 returning *`
/**
 * @deprecated
 */
const UPDATE_MANAGER_INFO = 
`update employees set mangname = $1, nationalid = $2, email = $3, phonenumber = $4, dob = $5, modifiedOn = $6, status = $7, position = $8, password = 'default'
where id = $10 returning *`
const ACTIVATE_EMPLOYEE=
`update employees set status = $1, modifiedOn = $2 where id = $3 returning *`
const SUSPEND_EMPLOYEE=
`update employees set status = $1, modifiedOn = $2 where id = $3 returning *`
const CHANGE_MANAGER_PASSWORD = `update manager set password = $1 where id = $2`;
const GET_EMPLOYEE_BY_ID = `select * from employees where id = $1`
const GET_MANAGER_BY_ID = `select * from manager where id - $1`
const GET_ALL_EMPLOYEES = `select * from employees`
const GET_ALL_MANGERS = `select * from manager`
const DELETE_EMPLOYEE = `delete from employees where id = $1 returning *`
const DELETE_MANAGER = `delete from manager where id = $1 returning *`

export{
    CREATE_EMPLOYEE_TABLE,
    CREATE_MANAGER_TABLE,
    CREATE_EMPLOYEE,
    CREATE_MANAGER,
    UPDATE_MANAGER_INFO,
    UPDATE_EMPLOYEE_INFO,
    ACTIVATE_EMPLOYEE,
    SUSPEND_EMPLOYEE,
    CHANGE_MANAGER_PASSWORD,
    GET_EMPLOYEE_BY_ID,
    GET_MANAGER_BY_ID,
    GET_ALL_EMPLOYEES,
    GET_ALL_MANGERS,
    DELETE_EMPLOYEE,
    DELETE_MANAGER
}