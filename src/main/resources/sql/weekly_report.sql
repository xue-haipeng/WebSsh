create table weekly_report (
id number,
create_date date,
create_user varchar2(20),
update_date date,
update_user varchar2(20),
system_name varchar2(100),
issue_brief varchar2(200),
app_type varchar2(10),
work_type varchar2(2),
issue_detail VARCHAR2(2000),
solve_procedure varchar2(2000),
file_name varchar2(50),
reference_doc varchar2(200));

create sequence sq_weeklyreport
MINVALUE 1
START WITH 1
NOMAXVALUE
INCREMENT BY 1
NOCYCLE;

select sq_weeklyreport.NEXTVAL from dual;
