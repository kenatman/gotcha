import React, { Component } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component {
  constructor(props) {
    super(props);

    // 변수선언을 this로 하는 것과 const로 하는 것의 차이.
    // this.pathname 으로 선언하면 다른 메소드에서 참조하여 사용가능. 오브젝트가 생성됨.
    // 반면 const 로 선언하면 constructor 안에서만 사용하고 끝날 것 같으면 이렇게 사용하는게 간단.
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes(`/movie/`),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const numberedId = Number(id);
    if (isNaN(numberedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        // how to use destructuring with let.()
        ({ data: result } = await movieApi.detail(numberedId));
      } else {
        ({ data: result } = await tvApi.detail(numberedId));
      }
    } catch {
      this.setState({ error: "Can not get Detail..." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
