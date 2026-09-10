<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '../src/components/Button';
import { Dialog, Alert} from '../src/components/Dialog';
import { Slider } from '../src/components/Slider';
import { Segmented, SegmentedItem } from '../src/components/Segmented';
import { Progress } from '../src/components/Progress'
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut } from '../src/components/DropdownMenu';
import { Splitter } from '../src/components/Splitter';
import { Select, Input, Autocomplete } from '../src/components/Input';
import { CableIcon, User } from 'lucide-vue-next';
import { Form, FormItem } from '../src/components/Form'
import { Space } from '../src/components/Space';
import Toast from '../src/components/Toast';
import { ScrollArea, SliderCaptcha, Tag } from './index.ts'

const themeRef = ref(false)
function onClickTheme() {
    document.body.setAttribute('data-theme', themeRef.value ? '' : 'dark')
    themeRef.value = !themeRef.value
}

function onClickAlert() {
    Alert.info('操作成功', '当前操作已完成，是否要继续执行？', {
        onConfirm: () => {
            Alert.error('提交失败', '请重新提交', {})
        }
    })
}

function onClickToast() {
    Toast.success('网络连接失败');
}

const numberValue = ref([10])
const tabIndex = ref(1)
const select = ref('')

const options = [
    { value: '111111', label: 'Apple', },
    { value: 'Banana', label: 'Banana'},
    { value: 'Blueberry', label: 'Blueberry'},
    { value: 'Grapes', label: 'Grapes'},
    { value: 'Pineapple', label: 'Pineapple'},
    { value: 'popularized', label: 'popularized'},
    { value: 'transfer', label: 'transfer'},
    { value: 'improper', label: 'improper'},
    { value: 'removed', label: 'removed'},
    { value: 'altered', label: 'altered'},
    { value: 'typographic', label: 'typographic'},
    { value: 'pleasant', label: 'pleasant'},
    { value: 'master', label: 'master'},
    { value: 'principles', label: 'principles'},
    { value: 'twentieth', label: 'twentieth'},
]
const inputValue = ref('')
</script>

<template>
        <div class="color" v-for="type in ['neutral', 'primary', 'success', 'danger', 'warning']">
            <div class="box" v-for="i in 12" :style="{ backgroundColor: `var(--color-${ type }-${ i })` }">
            </div>
        </div>

        <div style="padding: 10px 40px;">
            <Button @click="onClickTheme">
                <CableIcon />
                切换主题
            </Button>
            <span style="margin: 0 0.2em;"></span>
            <Button size="small">Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button>Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button size='medium'>Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button size="large">Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button is-loading>Button</Button>
        </div>
        <div style="padding: 0px 40px 10px;">
            <Button variant='secondary' size="small"><CableIcon /></Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant='secondary'><CableIcon /></Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant='secondary' size='medium'><CableIcon /></Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant='secondary' size="large"><CableIcon /></Button>
        </div>
        <div style="padding: 0px 40px 10px;">
            <span style="margin: 0 0.2em;"></span>
            <Button variant='secondary'>Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant="secondary" status="success">Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant="secondary" status="danger">Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant="secondary" status="warning">Button</Button>
        </div>
        <div style="padding: 0px 40px 10px;">
            <Button variant='text'>Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant="text" status="success">Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant="text" status="danger">Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant="text" status="warning">Button</Button>
        </div>
        <div style="padding: 0px 40px 10px;">
            <Button variant="primary">Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant="primary" status="success">Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant="primary" status="danger">Button</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button variant="primary" status="warning">Button</Button>
        </div>
        <div style="padding: 0px 40px 10px;">
            <Tag>Tag 标签</Tag>
            <span style="margin: 0 0.2em;"></span>
            <Tag type="primary">Tag</Tag>
            <span style="margin: 0 0.2em;"></span>
            <Tag type="danger">Tag 标签</Tag>
            <span style="margin: 0 0.2em;"></span>
            <Tag type="success">Tag 标签</Tag>
            <span style="margin: 0 0.2em;"></span>
            <Tag type="warning">Tag 标签</Tag>
        </div>
        <div style="padding: 0px 40px 10px;">
            <Dialog :width="400" title="提示" description="This action cannot be undone. Are you sure you want to permanently delete this file from our servers?">
                <template #trigger>
                    <Button>Dialog</Button>
                </template>
            </Dialog>
            <span style="margin: 0 0.2em;"></span>
            <Button @click="onClickAlert">Alert</Button>
            <span style="margin: 0 0.2em;"></span>
            <Button @click="onClickToast">Toast</Button>
            <span style="margin: 0 0.2em;"></span>
            
            <DropdownMenu>
                <Button>DropdownMenu</Button>
                <template #content>
                    <DropdownMenuItem class="ui-dropdown-menu-item">
                        内容
                        <DropdownMenuShortcut>⌘ C</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem class="ui-dropdown-menu-item">
                        创建子菜单
                        <DropdownMenuShortcut>⌘ D</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator class="ui-dropdown-menu-separator" />
                    <DropdownMenuItem class="ui-dropdown-menu-item">
                        已禁用项目
                        <DropdownMenuShortcut>⌘ P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem class="ui-dropdown-menu-item">
                        分隔符
                        <DropdownMenuShortcut>Shift + I</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem class="ui-dropdown-menu-item">
                        标签
                        <DropdownMenuShortcut>⌘ Z</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem class="ui-dropdown-menu-item">
                        限制内容/子内容的大小
                        <DropdownMenuShortcut>Ctrl + 0</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </template>
            </DropdownMenu>
        </div>
        <div style="padding: 10px 40px 10px;">
            <Select size="small" :data="[10,20,30,40,50,60]">
                <template #suffix>列</template>
            </Select>
            <span style="margin: 0 0.2em;"></span>
            <Select v-model="select" :data="options" style="min-width:150px">
                <template #prefix>排序</template>
            </Select>
            <span style="margin: 0 0.2em;"></span>
            <Select size='medium' v-model="select" :data="options" />
            <span style="margin: 0 0.2em;"></span>
            <Select size="large"  v-model="select" :data="options" />
        </div>

        <div style="padding: 10px 40px 10px;">
            <Input size="small" name="username" type="text" v-model="inputValue">
                <template #prefix>账号</template>
            </Input>
            <span style="margin: 0 0.2em;"></span>
            <Input name="username" type="text" v-model="inputValue">
                <template #prefix>账号</template>
            </Input>
            <span style="margin: 0 0.2em;"></span>
            <Input name="username" type="password" v-model="inputValue">
                <template #icon><User /></template>
            </Input>
            <span style="margin: 0 0.2em;"></span>
            <Input size='medium' name="username" type="text" v-model="inputValue" disabled>
                <template #prefix>账号</template>
            </Input>

            <span style="margin: 0 0.2em;"></span>
            <Autocomplete name="account" v-model="inputValue" :options="options" type="text" placeholder="请输入">
                <template #icon><User /></template>
            </Autocomplete>
        </div>

        <div style="padding: 10px 40px 10px;">
            <Slider :step="0.1"  :min="0" :max="100" v-model="numberValue" />
        </div>

        <div style="padding: 10px 40px 10px;">
            <Progress :max="100" :model-value="numberValue[0]" />
        </div>
        <div style="padding: 10px 40px 10px;">
            <Progress :max="100" :model-value="100" />
        </div>

        <div style="padding: 20px 40px 10px;">
            <Segmented size="small" v-model="tabIndex">
                <SegmentedItem :value="1" label="IndexBox" />
                <SegmentedItem :value="2" label="Drafts" />
                <SegmentedItem :value="3" label="Sent" />
            </Segmented>
            <span style="margin: 0 0.5em;"></span>
            <Segmented v-model="tabIndex">
                <SegmentedItem :value="1" label="IndexBox" />
                <SegmentedItem :value="2" label="Drafts" />
            </Segmented>
            <span style="margin: 0 0.5em;"></span>
            <Segmented size='medium' v-model="tabIndex" :default-value="tabIndex">
                <SegmentedItem :value="1" label="IndexBox" />
                <SegmentedItem :value="2" label="Drafts" />
                <SegmentedItem :value="3" label="Sent" />
            </Segmented>
            <span style="margin: 0 0.5em;"></span>
            <Segmented size="large" v-model="tabIndex">
                <SegmentedItem :value="1" label="IndexBox" />
                <SegmentedItem :value="2" label="Drafts" />
                <SegmentedItem :value="3" label="Sent" disabled />
            </Segmented>
        </div>
        <div style="padding: 20px 40px 10px;">
            <Form>
                <FormItem label="账号">
                    <Input name="username" placeholder="请输入6-18位字母、数字或下划线" v-model="inputValue" />
                </FormItem>
                <FormItem label="密码">
                    <template #extra>130fps</template>
                    <Input name="password" type="password"  placeholder="请输入6-18位字母、数字或特殊字符" v-model="inputValue" />
                </FormItem>
                <FormItem label="音量" description="请输入6-18位字母、数字或特殊字符">
                    <template #extra>{{ numberValue[0] }} %</template>
                    <Slider :step="0.1"  :min="0" :max="100" v-model="numberValue" />
                </FormItem>
                <FormItem>
                    <SliderCaptcha :request="async () => {
                        throw new Error('请求失败')
                        return {
                            key: '',
                            ttl: 180,
                        }
                    }" />
                </FormItem>
                <FormItem>
                    <Button variant="primary" long>登录</Button>
                </FormItem>
            </Form>
        </div>

        <div style="padding: 20px 40px 10px;">
            <Space :size="8">
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </Space>
        </div>
        <div style="padding: 20px 40px 10px;">
            <ScrollArea style="width: 200px; height: 200px; border: 1px solid var(--color-border);">
                <div>
                    <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p>
                    <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p>
                    <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p>
                    <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p>
                </div>
            </ScrollArea>
        </div>
        <div style="padding: 20px 40px 10px;">
            <div style="width: 500px; height: 300px; border: 1px solid var(--color-border)">
                <Splitter>
                </Splitter>
            </div>
        </div>
</template>

<style lang="less">
body {
    background-color: var(--color-fill-1);
}
.color {
    display: flex;
}
.box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    color: white;
    margin-left: 1px;
    margin-top: 1px;
    &:active {
        filter: brightness(.92) saturate(1.1);
    }
}
</style>