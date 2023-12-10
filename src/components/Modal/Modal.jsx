import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ imageUrl, id, close }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
  });

  useEffect(() => {
    document.removeEventListener('keydown', handleEsc);
  });

  const backDropClose = e => {
    if (e.target.classList.contains(css.overlay)) {
      close();
    }
  };

  const handleEsc = e => {
    e.code === 'Escape' && close();
  };

  return (
    <div handleLoad={backDropClose} className={css.overlay}>
      <div className={css.modal}>
        <img src={imageUrl} alt={id} />
      </div>
    </div>
  );
};

export default Modal;

// class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener('keydown', this.handleEsc);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleEsc);
//   }

//   backDropClose = e => {
//     if (e.target.classList.contains(css.overlay)) {
//       this.props.close();
//     }
//   };

//   handleEsc = e => {
//     e.code === 'Escape' && this.props.close();
//   };

//   render() {
//     const { imageUrl, id } = this.props;

//     return (
//       <div className={css.overlay}>
//         <div className={css.modal}>
//           <img src={imageUrl} alt={id} />
//         </div>
//       </div>
//     );
//   }
// }
// export default Modal;
