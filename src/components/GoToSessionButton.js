import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

function GoToSessionButton() {
    let navigate = useNavigate();
  
    function goToSession() {
      navigate({
        pathname: '/gameplay',
        search: '?id=abc',
        state: { detail: "b" }
      });
    }
  
    return (
      <Button variant="info" type="submit" onClick={goToSession}>
        Create Session
      </Button>
    );
  }
  export default GoToSessionButton;