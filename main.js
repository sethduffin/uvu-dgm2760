const units = [
  {
    name: 'Unit 01',
    description: 'Joe\'s Bed and Breakfast',
    path: './unit/01',
  },
  {
    name: 'Unit 02',
    path: './unit/02',
    description: 'Inspector Clouseau',
  },
  {
    name: 'Unit 03',
    path: './unit/03',
    description: 'Guessing Game',
    disabled: true, 
  },
  {
    name: 'Unit 04',
    path: './unit/04',
    description: 'Fortune Teller',
    disabled: true, 
  },
  {
    name: 'Unit 05',
    path: './unit/05',
    description: 'Arborist',
    disabled: true, 
  },
  {
    name: 'Unit 06',
    path: './unit/06',
    description: 'Nonsense Story',
    disabled: true, 
  },
]

function fmtUnitItem(unit) {
  const { name, path, description = '', disabled } = unit;

  return `
    <li>
      <a href="${path}" class="${disabled && 'disabled'}">
        <div class="unit-item__text-container">
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
        <span class="material-icons-round unit-item__arrow">
        arrow_forward
        </span>
      </a>
    </li>
  `;
}

units.forEach((unit) => {
  $('#unitList').append(fmtUnitItem(unit))
});
