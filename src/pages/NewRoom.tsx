import { Link } from 'react-router-dom';

import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom() {
	const { user } = useAuth();

	return (
		<div id="page-auth">
			<aside>
				<img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
				<strong>Toda pergunta tem uma resposta</strong>
				<p>Aprenda e compartilhe conhecimento com outras pessoas</p>
			</aside>
			<main>
				<div className="main-content">
					<img src={logoImg} alt="Letmeask" />
					<h2>Criar uma nova sala</h2>
					<div className="separator">ou entre em uma sala</div>
					<form>
						<input
							type="text"
							placeholder="Nome da sala"
						/>
						<Button type="submit">
							Criar sala
						</Button>
					</form>
					<p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
				</div>
			</main>
		</div>
	)
}
