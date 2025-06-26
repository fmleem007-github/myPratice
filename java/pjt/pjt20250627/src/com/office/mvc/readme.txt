[Subject]  <-- register -->  [Observer 1]
     |                         [Observer 2]
     |                         [Observer 3]
     |
     +-- 상태 변경됨
     |
     +-- notifyObservers()
             |
             +--> observer.update()
             +--> observer.update()
