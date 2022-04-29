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
  },
  {
    name: 'Unit 04',
    path: './unit/04',
    description: 'Fortune Teller',
  },
  {
    name: 'Unit 05',
    path: './unit/05',
    description: 'Arborist',
  },
  {
    name: 'Unit 06',
    path: './unit/06',
    description: 'Nonsense Story',
  },
  {
    name: 'Unit 07',
    path: './unit/07',
    description: 'Pizza Emporium',
  },
  {
    name: 'Unit 08',
    path: './unit/08',
    description: 'Grant\'s Tomb',
  },
  {
    name: 'Unit 09',
    path: './unit/09',
    description: 'Menu Duplication',
  },
  {
    name: 'Unit 10',
    path: './unit/10',
    description: 'Hotel Booking',
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
