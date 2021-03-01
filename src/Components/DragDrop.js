import React, { useState, useRef } from "react";

function DragDrop(props) {

  const [data, setData] = useState(props.data);
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragItemNode = useRef();

  function handletDragStart(e, item) {


    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener('dragend', handleDragEnd)
    dragItem.current = item;

    setTimeout(() => {
      setDragging(true);
    }, 0)
  }

  function handleDragEnd() {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener('dragend', handleDragEnd)
    dragItemNode.current = null;
  }

  function handleDragEnter(e, targetItem) {

      setData((prev) => {
        let newList = [...prev]
        newList[targetItem.groupId].items.splice(targetItem.itemId, 0, newList[dragItem.current.groupId].items.splice(dragItem.current.itemId, 1))
        dragItem.current = targetItem;
        return newList
      })
    
  }




  function getEffect(item) {
    if (dragItem.current.groupId === item.groupId && dragItem.current.itemId === item.itemId) {
      return "dnd_item current"
    }
    return "dnd_item"
  }



  return <div className="dragdrop">
    {data.map((group, groupId) => {
      return <div
        onDragEnter={dragging && !group.items.length ? (e) => handleDragEnter(e, { groupId, itemId: 0 }) : null}
        className="dnd_group">
        <div className="dnd_group_title">
          {group.title}
        </div>

        {group.items.map((item, itemId) => {
          return <div draggable onDragStart={(e) => handletDragStart(e, { groupId, itemId })}
            onDragEnter={dragging ? (e) => { handleDragEnter(e, { groupId, itemId }) } : null}
            className={dragging ? getEffect({ groupId, itemId }) : "dnd_item"}>
            {item}
          </div>
        })}
      </div>
    })}
  </div>
}

export default DragDrop