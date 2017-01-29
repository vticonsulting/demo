const faker = require('faker')
const ticketCount = 30
const ticketData = []

for (var i = 0; i < ticketCount; i++) {
  ticketData.push({
    number: faker.random.number(),
    status: faker.random.arrayElement([
      'New',
      'In progress',
      'Closed',
      'Escalated',
      'Escalate to Development',
      'Escalate to TFS'
    ]),
    priority: faker.random.arrayElement(['High', 'Medium', 'Low']),
    reason: faker.lorem.paragraph(),
    subject: faker.lorem.sentence()
  })
}

module.exports = {
  hidden: true,
  context: {
    tickets: ticketData
  }
}
