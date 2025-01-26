import s from "./SearchBox.module.css"


const SearchBox = () => {
  return (
      <label className={s.findContacts}>
          Find contacts by name
        <input type="text" />
    </label>
  )
}

export default SearchBox