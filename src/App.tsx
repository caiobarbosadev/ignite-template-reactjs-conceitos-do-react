/* eslint-disable react/react-in-jsx-scope */
import { TaskList } from "./components/TaskList"
import { Header } from "./components/Header"
import "./styles/global.scss"


export function App() {
	return (
		<>
			<Header />
			<TaskList />
		</>
	)
}