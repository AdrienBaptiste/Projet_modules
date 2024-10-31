import './App.css'
import MainLayout from './components/templates/MainLayout'
import LoginForm from './components/organisms/LoginForm';


function App() {

  return (
    <>
      <MainLayout>
        <LoginForm />
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1 className="text-lg font-semibold">Company Logo</h1>
          <p className="text-center">Here you can include additional information about the 
            company or any relevant content.</p>
        </div>
      </MainLayout>
    </>
  )
}

export default App
