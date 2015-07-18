import { React, View, BackButton } from 'reapp-kit';
import { Container, Block } from 'reapp-ui/components/Grid';


function stickerRequire(name) {
  return 'http://localhost:3011/assets/shared/facebook-stickers/stickers/' + name + '.png';
}


var Sticker = React.createClass({
  render: function () {
    var { width, pad, row, children, ...props } = this.props,
        stickerURL = stickerRequire(this.props.stickerPath),
        style = (this.props.style) ? this.props.style : {
          borderRadius: '128px',
          width: '64px',
          border: '2px solid #aaa'
        };

    return  <Block>
                <img style={style} src={stickerURL} alt="Sticker" />
            </Block>
  }
});

var StickerLink = React.createClass({
  render: function () {
    var style = {
      borderRadius: '256px',
      width: '128px',
      border: '2px solid #aaa'
    }
    return <a href=""><Sticker style={style} stickerPath={this.props.stickerPath}></Sticker></a>
  }
});


var StickerLinkContainer = React.createClass({
  render: function () {
    var containerProps = {
          pad: true,
          styles: {
            self: {
              textAlign: 'center',
              marginTop: '32px',
              marginBottom: '32px'
            }
          }
        },
        containerId = this.props.containerId;

    var container = <Container {...containerProps}>
      {[0, 1, 2, 3].map(function (iteration) {
        return <StickerLink stickerPath={containerId + " " + iteration} ></StickerLink>
      })}
    </Container>
    return container
  }
});

export {Sticker, StickerLink, StickerLinkContainer};
