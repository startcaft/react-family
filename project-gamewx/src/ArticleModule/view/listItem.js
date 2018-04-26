/**
 * Created by Administrator on 2018/4/26.
 */

import React from 'react';

function ListItem({rowData, sectionID, rowID}){
    return (
        <div key={rowID} style={{ padding: '0 15px' }} onClick={() => console.log(rowID)}>
            <div style={{lineHeight:'50px',color:'#888',fontSize:16,borderBottom:'1px solid #F6F6F6'}}>
                {rowData.articleTitle}
            </div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                <img style={{ height: '64px', marginRight: '15px' }} src="http://crawl.nosdn.127.net/1a4a01fe547f722470a2019c53a11735.jpg" alt="" />
                <div style={{ lineHeight: 1 }}>
                    <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.articleDesc}</div>
                </div>
            </div>
        </div>
    )
}

export default ListItem;