import React from 'react';
import Article from './Article'
import * as ForBar from './components/ForBar'
import Hoge from './components/Hoge'

const Blog = () => {

  // componentDidMount() {
  //   // ボタンがクリックされたらいいねをカウントアップする
  //   document.getElementById("counter").addEventListener('click', this.countUp)
  // }

  // componentDidUpdate() {
  //   if (this.state.count >= 10) {
  //     this.setState({count: 0})
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById("counter").removeEventListener('click', this.countUp)
  // }

  // countUp = () => {
  //   this.setState({count: this.state.count + 1})
  // }

    const authorName = "shuntagami"
    return (
      <>
        <Article
          title={"Reactの使い方"}
          // count={this.state.count}
        />
        <ForBar.For />
        <ForBar.Bar />
        <Hoge />
      </>
    )

}

export default Blog
