import React, { useEffect, useMemo, useState } from 'react'
import { ScrollView } from 'react-native'

import { List, Slider, Switch, Toast } from '../../'
import { Slider2 } from './slider2'

export default function StepperExample() {
  useEffect(() => {
    Toast.config({ stackable: false })
  }, [])

  const [disabledStep, setDisabledStep] = useState(false)
  const [tapToSeek, setTapToSeek] = useState(true)
  const marks = {
    0: 0,
    // 20: 20,
    40: 40,
    60: '',
    80: 80,
    100: 100,
  }

  const toastValue = (value: number | [number, number]) => {
    let text = ''
    if (typeof value === 'number') {
      text = `${value}`
    } else {
      text = `[${value.join(',')}]`
    }
    Toast.show({ content: `当前选中值为：${text}`, position: 'top' })
  }

  const styles = useMemo(
    () => ({
      slider: { height: 100 },
      trackContianer: { padding: 0, backgroundColor: 'transparent' },
      track: { backgroundColor: '#343434', height: 4 },
      fill: { backgroundColor: '#fefefe', height: 4 },
      tick: { backgroundColor: '#343434' },
      tickActive: { backgroundColor: '#fefefe' },
      mark: { height: 0, zIndex: 0 },
    }),
    [],
  )

  return (
    <ScrollView>
      <List>
        <List.Item
          extra={
            <Switch
              checked={disabledStep}
              onChange={(val) => {
                setDisabledStep(val)
              }}
            />
          }>
          disabledStep
          <List.Item.Brief>
            是否禁用步距；禁用后`onChange`将返回带有小数点的值
          </List.Item.Brief>
        </List.Item>
        <List.Item
          extra={
            <Switch
              checked={tapToSeek}
              onChange={(val) => {
                setTapToSeek(val)
              }}
            />
          }>
          tapToSeek
          <List.Item.Brief>
            是否允许点击轨道来设置thumb icon位置
          </List.Item.Brief>
        </List.Item>
      </List>
      <List
        renderHeader={'基础用法'}
        onStartShouldSetResponder={() => true}
        onTouchStart={(e) => e.stopPropagation()}>
        <List.Item>
          <Slider2 />
        </List.Item>
        <List.Item>
          <Slider
            // max={1}
            // icon={
            //   <View
            //     style={{
            //       width: 6,
            //       height: 6,
            //       borderRadius: 6,
            //       backgroundColor: 'red',
            //     }}
            //   />
            // }
            disabledStep={disabledStep}
            tapToSeek={tapToSeek}
            onChange={toastValue}
            onAfterChange={toastValue}
            // onSlidingStart={(val, index) =>
            //   console.log('onSlidingStart', { val, index })
            // }
            // onSlidingComplete={(val, index) =>
            //   console.log('onSlidingComplete', { val, index })
            // }
            marks={marks}
            ticks
            styles={styles}
          />
        </List.Item>
      </List>
      <List renderHeader={'显示刻度(ticks)并指定步距(step)'}>
        <List.Item>
          <Slider
            ticks
            step={10}
            defaultValue={40}
            disabledStep={disabledStep}
            tapToSeek={tapToSeek}
          />
        </List.Item>
      </List>
      <List renderHeader={'传入刻度标记(marks)'}>
        <List.Item>
          <Slider
            marks={marks}
            ticks
            disabledStep={disabledStep}
            tapToSeek={tapToSeek}
          />
        </List.Item>
      </List>
      <List renderHeader={'最大(max)/最小值(min)'}>
        <List.Item>
          <Slider
            step={100}
            min={100}
            max={1000}
            ticks
            onAfterChange={toastValue}
            tapToSeek={tapToSeek}
          />
        </List.Item>
      </List>
      <List renderHeader={'双滑块(range)'}>
        <List.Item>
          <Slider
            // marks={marks}
            // ticks
            range
            defaultValue={[60, 40]}
            tapToSeek={tapToSeek}
          />
        </List.Item>
      </List>
      <List renderHeader={'在拖动时显示悬浮提示'} style={{ marginBottom: 70 }}>
        <List.Item>
          <Slider popover tapToSeek={tapToSeek} />
        </List.Item>
      </List>
    </ScrollView>
  )
}
