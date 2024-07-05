import { RightCircleFilled, LeftCircleFilled } from '@ant-design/icons'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <RightCircleFilled
        className="but-right"
        onClick={onClick}
      >
      </RightCircleFilled>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <LeftCircleFilled
        className="but-left"
        onClick={onClick}
      >
      </LeftCircleFilled>
    );
  }

  export {SampleNextArrow, SamplePrevArrow}