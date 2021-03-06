import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import SearchQs from './SearchQs';
import QAList from './QAList';
import ModalComp from './ModalComp';

class QnAs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      visibleQsQuant: 2,
      allQsQuanity: null,
      showModal: false,
      showMoreQsBtn: true

    };
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getQuestionQuantity = this.getQuestionQuantity.bind(this);
    this.addQuestions = this.addQuestions.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  getQuestionQuantity(value) {
    this.setState({
      allQsQuanity: value
    });
  }
  addQuestions () {
    this.setState({
      visibleQsQuant: this.state.visibleQsQuant + 2
    });
  }
  updateSearchTerm(e) {

    if (e.target.value.length > 2) {
      this.setState({
        searchTerm: e.target.value,
        visibleQsQuant: this.state.allQsQuanity
      });
    } else {
      this.setState({
        searchTerm: '',
        visibleQsQuant: 2
      });
    }
  }

  render() {
    // console.log('product data', this.props.product);
    return (
      <div className='QnAsComp'>
        <div className='eric'>Questions and Answers</div>
        <SearchQs className='SearchQsComp' updateSearchTerm={this.updateSearchTerm}/>
        <QAList
          className='QAListcomp'
          id={this.props.product.id}
          searchTerm={this.state.searchTerm}
          prodName={this.props.product.name}
          visibleQsQuant={this.state.visibleQsQuant}
          getQuestionQuantity={this.getQuestionQuantity}
          />
          <ModalComp
            isOpen={this.state.showModal}
            handleCloseModal={this.handleCloseModal}
            id={this.props.product.id}
            question={true}
            prodName={this.props.product.name}
          />
        {(this.state.allQsQuanity > 2 && this.state.visibleQsQuant < this.state.allQsQuanity) ?
        <button className='QnABtn' onClick={this.addQuestions}>
          MORE ANSWERED QUESTIONS
        </button>
        : <div/>
        }
        <button className='QnABtn' onClick={this.handleOpenModal}>
          ADD A QUESTION +
        </button>
      </div>
    );
  }
}

export default QnAs;