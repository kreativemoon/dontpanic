import styled from '@emotion/styled';
import { injectGlobal } from '@emotion/css';

injectGlobal`
    @font-face {
        font-family: 'NSD-Black';
        src:
        url('../fonts/NotoSansDisplay-Black.woff') format('woff')
    }

    @font-face {
        font-family: 'NSD-Bold';
        src:
        url('../fonts/NotoSansDisplay-Bold.woff') format('woff')
    }

    @font-face {
        font-family: 'NSD-Regular';
        src:
        url('../fonts/NotoSansDisplay-Regular.woff') format('woff')
    }
    
    @font-face {
        font-family: 'NS-Bold';
        src:
        url('../fonts/NotoSans-Bold.woff') format('woff')
    }

    @font-face {
        font-family: 'NS-Medium';
        src:
        url('../fonts/NotoSans-Medium.woff') format('woff')
    }

    @font-face {
        font-family: 'NS-Regular';
        src:
        url('../fonts/NotoSans-Regular.woff') format('woff')
    }
`

export const BackGround = styled.div `
  background-image: url(../imgs/background.png);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
`