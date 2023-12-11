import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ imageUrl, alt, onClose }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const backDropClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  // const handleEsc = e => {
  //   e.code === 'Escape' && close();
  // };

  return (
    <div handleLoad={backDropClose} className={css.overlay}>
      <div className={css.modal}>
        <img src={imageUrl} alt={alt} />
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
