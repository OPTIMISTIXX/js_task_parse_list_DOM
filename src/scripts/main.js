'use strict';

function sortList() {
  const getWorkers = Array.from(document.querySelectorAll('li'));

  getWorkers.sort((a, b) => {
    const salaryA = parseInt(
      a.getAttribute('data-salary').replace(/[$,]/g, ''),
    );

    const salaryB = parseInt(
      b.getAttribute('data-salary').replace(/[$,]/g, ''),
    );

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  getWorkers.forEach((employee) => ul.appendChild(employee));
}

function getEmployees() {
  const getWorkers = Array.from(document.querySelectorAll('li'));
  const workers = [];

  getWorkers.forEach((li) => {
    const employee = {
      name: li.textContent,
      position: li.getAttribute('data-position'),
      salary: li.getAttribute('data-salary'),
      age: li.getAttribute('data-age'),
    };

    workers.push(employee);
  });

  return workers;
}

sortList();
getEmployees();
