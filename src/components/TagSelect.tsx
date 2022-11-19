import { FormLabel, HStack, Select, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import { useEffect, useState } from 'react'



function TagSelect({handleTagData ,currentTags} : any ) {
    
    const tags = ['Green', 'Red', 'Yellow', 'Blue']
    const [tagArr, setTagArr]: any[] = useState(currentTags || [])
    const [tagDirty, setTagDirty] = useState(false)

    const handleTag = (value: any) => {
        setTagArr([...tagArr, value])
    }

    const removeTag = (value : string) => {
        const filteredTagArr  = tagArr.filter((tag : string) => tag !== value)
        setTagArr(filteredTagArr)
    }

    const tagDirtyStatus = () => {
        console.log('currenttags');
        console.log(currentTags);
        console.log('tagarr');
        console.log(tagArr);

       
    }
       

    

    useEffect(() => {

        JSON.stringify(currentTags) === JSON.stringify(tagArr) ? setTagDirty(false) : setTagDirty(true)
        handleTagData(tagArr, tagDirty);
    }, [tagArr, handleTagData, tagDirty, setTagArr, currentTags])
    
    return (
        <>
        <FormLabel ml={{base:'10px', sm:'0'}}>Tags</FormLabel>
            <HStack spacing={2}>
            {tagArr.length &&
                tagArr.map((item : string, index : number) => {
                    
                  return  <Tag
                        size={'md'}
                        key={index}
                        borderRadius='full'
                        variant='solid'
                        colorScheme={item.toLocaleLowerCase()}
                    >
                        <TagLabel>{item}</TagLabel>
                        <TagCloseButton onClick={() => {
                            removeTag(item);
                            tagDirtyStatus();
                        }} />
                    </Tag>
                })}
            </HStack>

            {tagArr.length !== tags.length &&
                <Select mt={2} placeholder='Select tag' onChange={(e) => { handleTag(e.target.value); tagDirtyStatus(); }}>
                    {
                        tags.map((tag, index) => {
                            if (!tagArr.includes(tag)) {
                                return <option key={index} value={tag}>{tag}</option>
                            }else{
                                return ''
                            }
                        })
                    }
                </Select>
            }
        </>
    )
}

export default TagSelect