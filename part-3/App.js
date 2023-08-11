function App() {
  return (
    <div>
      <Person
        name="John"
        age={28}
        hobbies={["playing guitar", "running", "cooking"]}
      />
      <Person
        name="Emily"
        age={22}
        hobbies={["reading books", "painting"]}
      />
      <Person
        name="Michael"
        age={16}
        hobbies={["playing basketball", "video games"]}
      />
      <Person
        name="Sophia"
        age={12}
        hobbies={["dancing", "drawing", "playing piano"]}
      />
    </div>
  );
}
