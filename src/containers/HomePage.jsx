// 套件
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConfigProvider, DatePicker, message, Alert, Button } from 'antd'

// 由於 antd 元件的預設文案是英文，所以需要修改為中文。像是 <DatePicker /> 的 placeholder 會顯示 "請選擇日期"

import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn'
// import zhCN from 'antd/locale/zh_CN'
// dayjs.locale('zh-cn')
// 繁體中文
import 'dayjs/locale/zh-tw'
import zhCN from 'antd/locale/zh_TW'
dayjs.locale('zh-tw')

// 靜態資源

// 自定義 components

// 自定義函數 or 參數

function HomePage() {
    const [date, setDate] = useState(null)
    const [messageApi, contextHolder] = message.useMessage() // // 提示訊息

    function handleChange(value) {
        messageApi.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`)
        setDate(value)
    }

    return (
        <ConfigProvider
            locale={zhCN}
            theme={{ token: { colorPrimary: '#00b96b' } }} // 設定主題色
        >
            <main>
                <h1>HomePage</h1>

                <div style={{ margin: '100px auto' }}>
                    {
                        // 提示訊息
                        contextHolder
                    }

                    <DatePicker onChange={handleChange} />

                    {/* <div style={{ marginTop: 16 }}>Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}</div> */}
                    <Alert message="當前日期" description={date ? date.format('YYYY年MM月DD日') : '未選擇'} />
                </div>

                <div style={{ margin: '100px auto' }}>
                    <h2>可以透過 Button type="..." 來設定按鈕的樣式</h2>
                    <Button type="primary">primary Button</Button>
                    <Button type="dashed">dashed Button</Button>
                    <Button type="default">default Button</Button>
                    <Button type="link">link Button</Button>
                    <Button type="text">text Button</Button>
                </div>
            </main>
        </ConfigProvider>
    )
}

export default HomePage
