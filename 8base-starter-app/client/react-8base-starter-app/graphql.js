query {
  notesList(first: 10, filter: {
    title: {
      contains: "food"
    }
  }) {
    count
    items {
      title
      body
      user {
        email
      }
    }
  }
}