import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.container} >
        <div>
            <input  placeholder="Enter min-price" />
            <input  placeholder="Enter max-price" />
            <button>Search</button>
        </div>
    </div>
  )
}

export default SearchBar