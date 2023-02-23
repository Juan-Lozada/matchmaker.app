import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout/>}>
            <Route index element={<HomeView />} />
            <Route path="/registrarse" element={<RegistrarseView/>} />
            <Route path="/login" element={<LoginView/>} />
          </Route>
          <Route element={<PageLayoutPrivate/>} >
            <Route path="/dashboard" element={<UserView/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
