# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Solucion implementada

### Enrutamiento en cliente por URL
Para que cada componente tenga una dirección que se refleje en al URL, se utilizó el paquete [react router dom](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom). Las rutas se modificaron para en vez de estar fijas en el código en varias partes, se creo un hook `useMeetupRoutes` que tiene el listado de rutas, el componente y un label, pudiéndose agregar rutas directamente en este componente sin necesidad de cambio de implementación en otros componentes.
Rutas: 
* `/` se muestra el componente `<AllMeetups/>`
* `/new` se muestra el componente `<NewMeetupsPage/>`
* `/favorites` se muestra el componente `<FavoritesPage/>`

### Animacion del header
Para lograr un header fijo en el borde superior de la pagina se le agrego al header las propiedades `CSS`
```css
position: fixed;
top: 0;
transition: ease-in-out 0.5s;
```
y una clase nueva que mueve el header hacia arriba en caso de aplicarse:
```css
.header_hide {
  top: -5.1rem;
}
```
Se creo un placeholder para el header porque al poner el header `fixed` el contenido sube.
```css
.header_placeholder {
  height: 5rem;
  width: 100%;
}
```
Con esto se creo el hook personalizado `useScroll` para detectar `scroll` en la pantalla y si se mueve hacia arriba devuelve `1` y de lo contrario `-1`. Con el valor de este hook y el paquete [classnames](https://github.com/JedWatson/classnames) se aplica la clase `header_hide` al header cuando el scroll se mueve hacia arriba:
```jsx javascript
  const scrollDirection = useScroll()

  //scrollDirection == 0 or 1, hides = true, else hide = false
  const hide = useMemo(() => scrollDirection > 0 ? true : false, [scrollDirection])

return (
<header className={classNames(classes.header,classes.header_placeholder, 
{ [classes.header_hide]: hide })} data-test="navigation-header">
...
</header>
)
```

### Implementacion de agregar a favoritos
Para implementar la funcionalidad de favoritos que fuera accesible globalmente se utilizo [React Context](https://reactjs.org/docs/context.html).
Se creo el componente `FavoritesProvider` para que sus componentes hijos puedan utilizar los valores que se le pasan al contexto. Los valores que se le pasan es el *listado de favoritos*, *agregar a favoritos*, *eliminar de favoritos*:
```jsx 
const [favoritesList, setFavoritesList] = useState([])

    const addToFavorite = useCallback((item) => {
        ...
    }, [])

    const removeFromFavorite = useCallback((item) => {
        ...
    }, [])

    const contextValue = useMemo(() => ({
        favoritesList,
        addToFavorite,
        removeFromFavorite
    }), [addToFavorite, removeFromFavorite, favoritesList])

    return (
        <FavoriteContext.Provider value={contextValue}>
            {children}
        </FavoriteContext.Provider>
    )
```

Y se creo el hook `useFavorites` para acceder a los valores del contexto en las clases hijas.
Ejemplo (Pagina `Favorites`):
```jsx
const { favoritesList } = useFavorites()

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
          {
            favoritesList.map(item =>
              <MeetupItem key={item.id} item={item} />
            )
          }

        </ul>
    </section>
  );
```

