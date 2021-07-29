import { Row, Col, Avatar, Space } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';


let Element = ({ items, add, remove }) => {

    let res = items.map((i, id) => <Container key={id} item={i} add={add} remove={remove} />)

    return (
        <div margin={20}>
            <QueueAnim component='div' type={['right', 'left']} leaveReverse>
                {res}
            </QueueAnim>
        </div>
    );

};


let Container = ({ item, add, remove }) => {
    return (
        <>
            <Row
                justify="space-around"
                align="middle"
                style={{
                    background: item.count !== 0 ? 'white' : 'rgba(255, 255, 255, .5)',
                    fontSize: 20,
                    boxShadow: item.count !== 0 ? "0px 0px 10px 10px rgba(0, 0, 0, 0.2)" : 'none',
                }}
                gutter={[0, 32]}>
                <Col span={4}>
                    {item.name}
                </Col>
                <Col span={4}>
                    <Avatar shape="square" size={64} src={item.img} />
                </Col>
                <Col span={4}>
                    <Space>
                        <PlusCircleOutlined onClick={() => add(item.name)} style={{ color: "#52c41a" }} />
                        <span style={{ color: item.count === 0 ? 'gray' : 'black' }}>{item.count}</span>
                        <MinusCircleOutlined onClick={() => remove(item.name)} style={{ color: "#f5222d" }} />
                    </Space>
                </Col>
                <Col span={4}>
                    {item.sell}
                </Col>
                <Col span={4}>
                    {`${item.craftVsBuy} ${item.min}`}
                </Col>
            </Row>
            <br />
        </>
    )
}

export default Element;